# FenwayBytes API

## Abstract

   The FenwayBytes API offers location and user management for the iOS mobile application (optional).

### Features
   - DB Integration
   - Seed & Update Locations
   - Retrieve Locations

### Routes
	
   ```Dev: http://localhost:3001```
   ```Prod: https://api.fenwaybytes.com```
   
   ```GET /locations```
   ```GET /locations?lon=${#}&lat=${#}&filters=${$<String>]}```
   ```POST /locations/create ```