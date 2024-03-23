module.exports = {
    apps : [{
      name: 'backend', // Name of your application
      script: 'npm', // Use npm as the script
      args: 'run dev', // Arguments to pass to the script
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development' // Environment variables for development
      },
      env_production: {
        NODE_ENV: 'production' // Environment variables for production
      }
    }]
  };
  