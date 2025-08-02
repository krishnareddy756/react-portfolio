// vite.config.js - Advanced Configuration
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Advanced build optimization
  build: {
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'utils-vendor': ['zustand', 'react-intersection-observer']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging
    sourcemap: true
  },
  
  // Development server optimization
  server: {
    // Hot module replacement
    hmr: {
      overlay: true
    },
    // Disable automatic browser opening to prevent EPERM errors
    open: false,
    // Set port explicitly
    port: 5173,
    // Enable CORS for development
    cors: true
  },
  
  // Performance optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'zustand',
      'react-intersection-observer'
    ]
  },
  
  // Asset handling
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  
  // Define global constants
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  }
})
