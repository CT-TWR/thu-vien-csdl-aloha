self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Bỏ qua hoặc thêm logic cache ở đây nếu cần
});