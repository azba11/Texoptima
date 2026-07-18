const TexOptima = {
  user: {
    factoryName: 'Al-Noor Textile Mills',
    ownerName: 'Abdul Rahman',
    email: 'abdul@alnoor.com',
    phone: '+92 300 1234567',
    avatar: 'AR',
    joined: 'January 2025',
    plan: 'Professional'
  },

  categories: [
    { id: 1, name: 'Lawn', slug: 'lawn', description: 'Premium cotton lawn fabrics for summer', productCount: 6, status: 'active', createdAt: '2025-01-15', color: '#059669' },
    { id: 2, name: 'Cotton', slug: 'cotton', description: 'High-quality pure cotton fabrics', productCount: 4, status: 'active', createdAt: '2025-01-15', color: '#3b82f6' },
    { id: 3, name: 'Khaddar', slug: 'khaddar', description: 'Traditional handwoven khaddar', productCount: 5, status: 'active', createdAt: '2025-01-20', color: '#8b5cf6' },
    { id: 4, name: 'Linen', slug: 'linen', description: 'Breathable linen fabric collection', productCount: 3, status: 'active', createdAt: '2025-02-01', color: '#f59e0b' },
    { id: 5, name: 'Denim', slug: 'denim', description: 'Durable denim fabrics', productCount: 4, status: 'active', createdAt: '2025-02-10', color: '#6366f1' },
    { id: 6, name: 'Silk', slug: 'silk', description: 'Luxurious silk fabric range', productCount: 3, status: 'inactive', createdAt: '2025-03-01', color: '#ec4899' }
  ],

  products: [
    { id: 1, categoryId: 1, name: 'Premium Lawn', sku: 'LN-001', price: 850, cost: 550, unit: 'Meter', stock: 420, minStock: 100, status: 'active', description: 'High-quality premium lawn fabric with smooth finish', image: null, createdAt: '2025-01-16' },
    { id: 2, categoryId: 1, name: 'Printed Lawn', sku: 'LN-002', price: 650, cost: 400, unit: 'Meter', stock: 280, minStock: 80, status: 'active', description: 'Beautiful printed designs on fine lawn', image: null, createdAt: '2025-01-16' },
    { id: 3, categoryId: 1, name: 'Digital Lawn', sku: 'LN-003', price: 950, cost: 600, unit: 'Meter', stock: 180, minStock: 60, status: 'active', description: 'Digitally printed lawn with intricate patterns', image: null, createdAt: '2025-01-18' },
    { id: 4, categoryId: 1, name: 'Luxury Lawn', sku: 'LN-004', price: 1200, cost: 750, unit: 'Meter', stock: 65, minStock: 50, status: 'active', description: 'Premium luxury lawn with exclusive designs', image: null, createdAt: '2025-01-20' },
    { id: 5, categoryId: 1, name: 'Organic Lawn', sku: 'LN-005', price: 1100, cost: 700, unit: 'Meter', stock: 90, minStock: 40, status: 'active', description: 'Organic cotton lawn, eco-friendly', image: null, createdAt: '2025-02-01' },
    { id: 6, categoryId: 1, name: 'Embroidered Lawn', sku: 'LN-006', price: 1500, cost: 950, unit: 'Meter', stock: 35, minStock: 30, status: 'active', description: 'Hand-embroidered lawn fabric', image: null, createdAt: '2025-02-05' },
    { id: 7, categoryId: 2, name: 'Fine Cotton', sku: 'CT-001', price: 550, cost: 350, unit: 'Meter', stock: 500, minStock: 120, status: 'active', description: 'Fine quality pure cotton fabric', image: null, createdAt: '2025-01-16' },
    { id: 8, categoryId: 2, name: 'Superior Cotton', sku: 'CT-002', price: 700, cost: 450, unit: 'Meter', stock: 320, minStock: 100, status: 'active', description: 'Superior grade cotton fabric', image: null, createdAt: '2025-01-20' },
    { id: 9, categoryId: 2, name: 'Brushed Cotton', sku: 'CT-003', price: 800, cost: 520, unit: 'Meter', stock: 150, minStock: 60, status: 'active', description: 'Soft brushed cotton fabric', image: null, createdAt: '2025-02-01' },
    { id: 10, categoryId: 2, name: 'Cotton Silk', sku: 'CT-004', price: 950, cost: 620, unit: 'Meter', stock: 85, minStock: 40, status: 'inactive', description: 'Cotton-silk blend fabric', image: null, createdAt: '2025-02-15' },
    { id: 11, categoryId: 3, name: 'Classic Khaddar', sku: 'KH-001', price: 450, cost: 280, unit: 'Meter', stock: 380, minStock: 100, status: 'active', description: 'Traditional classic khaddar fabric', image: null, createdAt: '2025-01-20' },
    { id: 12, categoryId: 3, name: 'Premium Khaddar', sku: 'KH-002', price: 600, cost: 380, unit: 'Meter', stock: 220, minStock: 80, status: 'active', description: 'Premium quality khaddar with fine weave', image: null, createdAt: '2025-01-22' },
    { id: 13, categoryId: 3, name: 'Printed Khaddar', sku: 'KH-003', price: 550, cost: 350, unit: 'Meter', stock: 165, minStock: 60, status: 'active', description: 'Printed designs on khaddar fabric', image: null, createdAt: '2025-02-01' },
    { id: 14, categoryId: 3, name: 'Heavy Khaddar', sku: 'KH-004', price: 700, cost: 450, unit: 'Meter', stock: 95, minStock: 50, status: 'active', description: 'Heavy weight khaddar for winters', image: null, createdAt: '2025-02-10' },
    { id: 15, categoryId: 3, name: 'Organic Khaddar', sku: 'KH-005', price: 500, cost: 320, unit: 'Meter', stock: 0, minStock: 40, status: 'inactive', description: 'Organic cotton khaddar', image: null, createdAt: '2025-03-01' },
    { id: 16, categoryId: 4, name: 'Pure Linen', sku: 'LN-001', price: 1200, cost: 780, unit: 'Meter', stock: 140, minStock: 40, status: 'active', description: '100% pure linen fabric', image: null, createdAt: '2025-02-01' },
    { id: 17, categoryId: 4, name: 'Linen Blend', sku: 'LN-002', price: 900, cost: 580, unit: 'Meter', stock: 200, minStock: 60, status: 'active', description: 'Linen-cotton blend fabric', image: null, createdAt: '2025-02-05' },
    { id: 18, categoryId: 4, name: 'Washed Linen', sku: 'LN-003', price: 1400, cost: 900, unit: 'Meter', stock: 55, minStock: 30, status: 'active', description: 'Pre-washed soft linen fabric', image: null, createdAt: '2025-02-15' },
    { id: 19, categoryId: 5, name: 'Classic Denim', sku: 'DN-001', price: 800, cost: 500, unit: 'Meter', stock: 300, minStock: 80, status: 'active', description: 'Classic blue denim fabric', image: null, createdAt: '2025-02-10' },
    { id: 20, categoryId: 5, name: 'Stretch Denim', sku: 'DN-002', price: 950, cost: 620, unit: 'Meter', stock: 180, minStock: 60, status: 'active', description: 'Denim with stretch comfort', image: null, createdAt: '2025-02-12' },
    { id: 21, categoryId: 5, name: 'Black Denim', sku: 'DN-003', price: 850, cost: 530, unit: 'Meter', stock: 220, minStock: 70, status: 'active', description: 'Premium black denim fabric', image: null, createdAt: '2025-02-15' },
    { id: 22, categoryId: 5, name: 'Raw Denim', sku: 'DN-004', price: 1100, cost: 700, unit: 'Meter', stock: 75, minStock: 40, status: 'active', description: 'Unwashed raw denim fabric', image: null, createdAt: '2025-03-01' },
    { id: 23, categoryId: 6, name: 'Pure Silk', sku: 'SK-001', price: 2500, cost: 1600, unit: 'Meter', stock: 60, minStock: 20, status: 'active', description: 'Luxurious pure silk fabric', image: null, createdAt: '2025-03-01' },
    { id: 24, categoryId: 6, name: 'Raw Silk', sku: 'SK-002', price: 1800, cost: 1100, unit: 'Meter', stock: 90, minStock: 30, status: 'inactive', description: 'Natural raw silk fabric', image: null, createdAt: '2025-03-05' },
    { id: 25, categoryId: 6, name: 'Silk Chiffon', sku: 'SK-003', price: 2200, cost: 1400, unit: 'Meter', stock: 40, minStock: 20, status: 'active', description: 'Lightweight silk chiffon', image: null, createdAt: '2025-03-10' }
  ],

  sales: [
    { id: 1001, productId: 1, productName: 'Premium Lawn', quantity: 50, unitPrice: 850, total: 42500, date: '2025-06-01', customer: 'Fatima Textiles', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1002, productId: 7, productName: 'Fine Cotton', quantity: 100, unitPrice: 550, total: 55000, date: '2025-06-02', customer: 'Crescent Fabrics', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1003, productId: 11, productName: 'Classic Khaddar', quantity: 80, unitPrice: 450, total: 36000, date: '2025-06-03', customer: 'Al-Hamd Textiles', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1004, productId: 3, productName: 'Digital Lawn', quantity: 25, unitPrice: 950, total: 23750, date: '2025-06-04', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' },
    { id: 1005, productId: 19, productName: 'Classic Denim', quantity: 60, unitPrice: 800, total: 48000, date: '2025-06-05', customer: 'Denim World', paymentStatus: 'pending', type: 'wholesale' },
    { id: 1006, productId: 2, productName: 'Printed Lawn', quantity: 40, unitPrice: 650, total: 26000, date: '2025-06-06', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' },
    { id: 1007, productId: 16, productName: 'Pure Linen', quantity: 20, unitPrice: 1200, total: 24000, date: '2025-06-07', customer: 'Linen House', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1008, productId: 8, productName: 'Superior Cotton', quantity: 75, unitPrice: 700, total: 52500, date: '2025-06-08', customer: 'Cotton Plus', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1009, productId: 5, productName: 'Organic Lawn', quantity: 15, unitPrice: 1100, total: 16500, date: '2025-06-09', customer: 'Eco Fabrics', paymentStatus: 'pending', type: 'wholesale' },
    { id: 1010, productId: 20, productName: 'Stretch Denim', quantity: 35, unitPrice: 950, total: 33250, date: '2025-06-10', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' },
    { id: 1011, productId: 12, productName: 'Premium Khaddar', quantity: 45, unitPrice: 600, total: 27000, date: '2025-06-11', customer: 'Khaddar Kraft', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1012, productId: 4, productName: 'Luxury Lawn', quantity: 12, unitPrice: 1200, total: 14400, date: '2025-06-12', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' },
    { id: 1013, productId: 23, productName: 'Pure Silk', quantity: 8, unitPrice: 2500, total: 20000, date: '2025-06-13', customer: 'Silk Route', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1014, productId: 17, productName: 'Linen Blend', quantity: 30, unitPrice: 900, total: 27000, date: '2025-06-14', customer: 'Retail Customer', paymentStatus: 'pending', type: 'retail' },
    { id: 1015, productId: 13, productName: 'Printed Khaddar', quantity: 55, unitPrice: 550, total: 30250, date: '2025-06-15', customer: 'Khaddar Kraft', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1016, productId: 1, productName: 'Premium Lawn', quantity: 30, unitPrice: 850, total: 25500, date: '2025-06-16', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' },
    { id: 1017, productId: 7, productName: 'Fine Cotton', quantity: 60, unitPrice: 550, total: 33000, date: '2025-06-17', customer: 'Crescent Fabrics', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1018, productId: 25, productName: 'Silk Chiffon', quantity: 10, unitPrice: 2200, total: 22000, date: '2025-06-18', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' },
    { id: 1019, productId: 14, productName: 'Heavy Khaddar', quantity: 25, unitPrice: 700, total: 17500, date: '2025-06-19', customer: 'Winter Textiles', paymentStatus: 'pending', type: 'wholesale' },
    { id: 1020, productId: 21, productName: 'Black Denim', quantity: 40, unitPrice: 850, total: 34000, date: '2025-06-20', customer: 'Denim World', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1021, productId: 2, productName: 'Printed Lawn', quantity: 35, unitPrice: 650, total: 22750, date: '2025-06-21', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' },
    { id: 1022, productId: 9, productName: 'Brushed Cotton', quantity: 20, unitPrice: 800, total: 16000, date: '2025-06-22', customer: 'Cotton Plus', paymentStatus: 'paid', type: 'wholesale' },
    { id: 1023, productId: 3, productName: 'Digital Lawn', quantity: 18, unitPrice: 950, total: 17100, date: '2025-06-23', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' },
    { id: 1024, productId: 16, productName: 'Pure Linen', quantity: 15, unitPrice: 1200, total: 18000, date: '2025-06-24', customer: 'Linen House', paymentStatus: 'pending', type: 'wholesale' },
    { id: 1025, productId: 22, productName: 'Raw Denim', quantity: 10, unitPrice: 1100, total: 11000, date: '2025-06-25', customer: 'Retail Customer', paymentStatus: 'paid', type: 'retail' }
  ],

  forecasts: [
    { month: 'Jul 2025', productId: 1, productName: 'Premium Lawn', predictedDemand: 320, confidence: 92, trend: 'up' },
    { month: 'Jul 2025', productId: 2, productName: 'Printed Lawn', predictedDemand: 280, confidence: 88, trend: 'up' },
    { month: 'Jul 2025', productId: 7, productName: 'Fine Cotton', predictedDemand: 420, confidence: 90, trend: 'stable' },
    { month: 'Jul 2025', productId: 11, productName: 'Classic Khaddar', predictedDemand: 350, confidence: 85, trend: 'down' },
    { month: 'Jul 2025', productId: 19, productName: 'Classic Denim', predictedDemand: 250, confidence: 87, trend: 'up' },
    { month: 'Aug 2025', productId: 1, productName: 'Premium Lawn', predictedDemand: 350, confidence: 91, trend: 'up' },
    { month: 'Aug 2025', productId: 2, productName: 'Printed Lawn', predictedDemand: 300, confidence: 86, trend: 'up' },
    { month: 'Aug 2025', productId: 7, productName: 'Fine Cotton', predictedDemand: 380, confidence: 89, trend: 'stable' },
    { month: 'Aug 2025', productId: 11, productName: 'Classic Khaddar', predictedDemand: 300, confidence: 83, trend: 'down' },
    { month: 'Aug 2025', productId: 19, productName: 'Classic Denim', predictedDemand: 280, confidence: 85, trend: 'up' }
  ],

  anomalies: [
    { id: 1, date: '2025-06-22', productName: 'Premium Lawn', type: 'stock_drop', severity: 'high', description: 'Unusual 40% stock decrease within 24 hours', status: 'unresolved', detectedAt: '2025-06-22 14:30' },
    { id: 2, date: '2025-06-20', productName: 'Classic Khaddar', type: 'price_change', severity: 'medium', description: 'Sales price deviates 15% from historical average', status: 'investigating', detectedAt: '2025-06-20 09:15' },
    { id: 3, date: '2025-06-18', productName: 'Pure Silk', type: 'low_stock', severity: 'high', description: 'Stock level critically low (60 units) with high demand forecast', status: 'unresolved', detectedAt: '2025-06-18 11:00' },
    { id: 4, date: '2025-06-15', productName: 'Digital Lawn', type: 'sales_anomaly', severity: 'low', description: 'Sales spike 200% above weekly average', status: 'resolved', detectedAt: '2025-06-15 16:45' },
    { id: 5, date: '2025-06-12', productName: 'Fine Cotton', type: 'inventory_discrepancy', severity: 'medium', description: 'Recorded stock mismatch: 500 vs expected 487 units', status: 'investigating', detectedAt: '2025-06-12 10:20' }
  ],

  recentActivity: [
    { action: 'New sale recorded', detail: 'Premium Lawn - 50m to Fatima Textiles', time: '2 hours ago', type: 'sale' },
    { action: 'Stock updated', detail: 'Fine Cotton increased by 100m', time: '4 hours ago', type: 'stock' },
    { action: 'Low stock alert', detail: 'Embroidered Lawn - only 35m remaining', time: '6 hours ago', type: 'alert' },
    { action: 'New product added', detail: 'Silk Chiffon added to Silk category', time: '1 day ago', type: 'product' },
    { action: 'AI Forecast generated', detail: 'July 2025 predictions available', time: '1 day ago', type: 'forecast' },
    { action: 'Anomaly detected', detail: 'Premium Lawn unusual stock drop', time: '2 days ago', type: 'anomaly' },
    { action: 'Report exported', detail: 'Monthly sales report - June 2025', time: '2 days ago', type: 'report' },
    { action: 'Category updated', detail: 'Silk category reactivated', time: '3 days ago', type: 'category' }
  ],

  monthlyRevenue: [
    { month: 'Jan', revenue: 185000, target: 200000 },
    { month: 'Feb', revenue: 210000, target: 200000 },
    { month: 'Mar', revenue: 195000, target: 220000 },
    { month: 'Apr', revenue: 240000, target: 220000 },
    { month: 'May', revenue: 270000, target: 250000 },
    { month: 'Jun', revenue: 295000, target: 280000 }
  ],

  topProducts: [
    { name: 'Premium Lawn', sales: 80, revenue: 68000 },
    { name: 'Fine Cotton', sales: 160, revenue: 88000 },
    { name: 'Classic Khaddar', sales: 80, revenue: 36000 },
    { name: 'Printed Lawn', sales: 75, revenue: 48750 },
    { name: 'Superior Cotton', sales: 75, revenue: 52500 }
  ],

  monthlySales: [
    { month: 'Jan', count: 12 },
    { month: 'Feb', count: 15 },
    { month: 'Mar', count: 14 },
    { month: 'Apr', count: 18 },
    { month: 'May', count: 22 },
    { month: 'Jun', count: 25 }
  ],

  stockMovements: [
    { date: '2025-06-25', productName: 'Premium Lawn', type: 'out', quantity: 50, reason: 'Sale' },
    { date: '2025-06-24', productName: 'Fine Cotton', type: 'in', quantity: 100, reason: 'Production' },
    { date: '2025-06-24', productName: 'Classic Khaddar', type: 'out', quantity: 30, reason: 'Sale' },
    { date: '2025-06-23', productName: 'Digital Lawn', type: 'in', quantity: 60, reason: 'Production' },
    { date: '2025-06-22', productName: 'Pure Linen', type: 'out', quantity: 20, reason: 'Sale' },
    { date: '2025-06-21', productName: 'Superior Cotton', type: 'in', quantity: 80, reason: 'Restock' },
    { date: '2025-06-20', productName: 'Premium Lawn', type: 'out', quantity: 30, reason: 'Sale' }
  ],

  demoPrompt: {
    title: 'Explore with Demo Data?',
    message: 'Would you like to explore TexOptima using realistic demo data? You can always add your own data later.'
  },

  getCategory: function(id) {
    return this.categories.find(c => c.id === id);
  },

  getProductsByCategory: function(categoryId) {
    return this.products.filter(p => p.categoryId === categoryId);
  },

  getProduct: function(id) {
    return this.products.find(p => p.id === id);
  },

  getLowStockProducts: function() {
    return this.products.filter(p => p.status === 'active' && p.stock <= p.minStock);
  },

  getOutOfStockProducts: function() {
    return this.products.filter(p => p.stock === 0);
  },

  getTotalRevenue: function() {
    return this.sales.filter(s => s.paymentStatus === 'paid').reduce((sum, s) => sum + s.total, 0);
  },

  getTotalSales: function() {
    return this.sales.filter(s => s.paymentStatus === 'paid').length;
  },

  getTotalProducts: function() {
    return this.products.filter(p => p.status === 'active').length;
  },

  getTotalStock: function() {
    return this.products.filter(p => p.status === 'active').reduce((sum, p) => sum + p.stock, 0);
  },

  formatCurrency: function(amount) {
    return 'Rs. ' + amount.toLocaleString('en-PK');
  },

  formatDate: function(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
};
