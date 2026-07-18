let revenueChartInstance = null;
let stockChartInstance = null;

function initDashboardCharts() {
  drawRevenueChart();
  drawStockDistributionChart();
}

function drawRevenueChart() {
  const canvas = document.getElementById('revenueChart');
  if (!canvas) return;
  if (revenueChartInstance) revenueChartInstance.destroy();

  const data = TexOptima.monthlyRevenue;
  if (!data || data.length === 0) return;

  const ctx = canvas.getContext('2d');
  revenueChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.month),
      datasets: [
        {
          label: 'Revenue',
          data: data.map(d => d.revenue),
          backgroundColor: '#059669',
          borderRadius: 4,
          barPercentage: 0.35,
          categoryPercentage: 0.7
        },
        {
          label: 'Target',
          data: data.map(d => d.target),
          backgroundColor: '#e5e7eb',
          borderRadius: 4,
          barPercentage: 0.35,
          categoryPercentage: 0.7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: { boxWidth: 10, boxHeight: 10, borderRadius: 2, font: { family: 'Inter', size: 11 }, color: '#6b7280', usePointStyle: true, pointStyle: 'rectRounded', padding: 16 }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 12 }, color: '#6b7280' }
        },
        y: {
          beginAtZero: true,
          grid: { color: '#f3f4f6' },
          ticks: {
            font: { family: 'Inter', size: 11 },
            color: '#9ca3af',
            callback: function(v) { return 'Rs. ' + v.toLocaleString(); }
          }
        }
      }
    }
  });
}

function drawStockDistributionChart() {
  const canvas = document.getElementById('stockDistChart');
  if (!canvas) return;
  if (stockChartInstance) stockChartInstance.destroy();

  const categories = TexOptima.categories.filter(c => c.status === 'active');
  if (!categories || categories.length === 0) return;

  const colors = ['#059669', '#3b82f6', '#8b5cf6', '#f59e0b', '#6366f1', '#ec4899'];
  const total = categories.reduce((s, c) => s + c.productCount, 0);

  const ctx = canvas.getContext('2d');

  // Center text via plugin
  const centerText = {
    id: 'centerText',
    beforeDraw: function(chart) {
      const { width, height, ctx } = chart;
      ctx.save();
      const cx = width / 2, cy = height / 2;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#374151';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.fillText(total, cx, cy - 6);
      ctx.fillStyle = '#9ca3af';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('Products', cx, cy + 16);
      ctx.restore();
    }
  };
  stockChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: categories.map(c => c.name),
      datasets: [{
        data: categories.map(c => c.productCount),
        backgroundColor: colors.slice(0, categories.length),
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              const val = ctx.parsed;
              const pct = total > 0 ? Math.round(val / total * 100) : 0;
              return ctx.label + ': ' + val + ' products (' + pct + '%)';
            }
          }
        }
      }
    },
    plugins: [centerText]
  });
}
