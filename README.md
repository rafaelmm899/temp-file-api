# Temporary File API

## Description
API for handling temporary files using Express.js.

## Main Dependencies
| Technology | Version | Purpose |
|------------|---------|---------|
| Express.js | 5.1.0   | Web framework |
| Multer     | 1.4.5   | File handling middleware |
| Joi       | 17.13.3 | Data validation |
| node-cron | 3.0.0   | Task scheduling |

## Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Available Scripts**:
  - `npm run dev`: Starts the server in development mode with auto-reload
  - `docker-compose up`: Starts all services defined in docker-compose
  - `docker-compose up --build`: Rebuilds and starts services

## Quick Start

### Option 1: Local Installation
1. Clone the repository
2. Install dependencies
3. Copy .env.example to .env
4. Start the server

### Option 2: Using Docker
1. Clone the repository
2. Build the image `docker-compose up --build -d`
3. Run the container

## Contributing
1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/NewFeature
   ```
3. Make your changes and commit
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to your branch
   ```bash
   git push origin feature/NewFeature
   ```
5. Create a Pull Request

## Bug Reporting
If you find a bug, please report it in the [issues section](https://github.com/rafaelmm899/temp-file-api/issues).

## Author
Jose Rafael Mata Milano

## License
ISC
