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
   
   ```
      Request

      GET /businesses

      Response
      Returns List of Business Details
      Business Details for the Get all is:

      {
         id: string, // UUID
         name: string, // Business Name,
         hours: [number[], number[], number[], number[], number[], number[], number[]] // Hours for Business,
         coordinates: [number, number]
      }

   ```

   ```
      Request | Params => :id == businessId

      GET /businesses/:id

      Response
      Returns IBusinessDetails

      interface IBusinessDetailed {
         id: string;
         name: string;
         coordinates: number[]; // Two Numbers
         hours: [number[], number[],number[], number[],number[],number[],number[]];
         hasCoffee: boolean;
         hasFood: boolean;
         hasLine: boolean;
         rating: number;
      }

   ```

   ```
      Request

      Body 
      businessId: string
      userId: string
      rating: number

      POST /businesses/rating/add

      Response
      Returns IBusinessDetails

      interface IBusinessDetailed {
         id: string;
         name: string;
         coordinates: number[]; // Two Numbers
         hours: [number[], number[],number[], number[],number[],number[],number[]];
         hasCoffee: boolean;
         hasFood: boolean;
         hasLine: boolean;
         rating: number;
      }
   ```

   ```
      Request

      Body 
      id: string // businessId
      coffee: string // true/false

      POST /businesses/coffee/update

      Response
      Returns IBusinessDetails

      interface IBusinessDetailed {
         id: string;
         name: string;
         coordinates: number[]; // Two Numbers
         hours: [number[], number[],number[], number[],number[],number[],number[]];
         hasCoffee: boolean;
         hasFood: boolean;
         hasLine: boolean;
         rating: number;
      }

   ```

   ```
      Request

      Body 
      id: string // businessId
      line: string // true/false

      POST /businesses/line/update

      Response
      Returns IBusinessDetails

      interface IBusinessDetailed {
         id: string;
         name: string;
         coordinates: number[]; // Two Numbers
         hours: [number[], number[],number[], number[],number[],number[],number[]];
         hasCoffee: boolean;
         hasFood: boolean;
         hasLine: boolean;
         rating: number;
      }

   ```

   ```
      Request

      Body 
      id: string // businessId
      food: string // true/false

      POST /businesses/food/update

      Response
      Returns IBusinessDetails

      interface IBusinessDetailed {
         id: string;
         name: string;
         coordinates: number[]; // Two Numbers
         hours: [number[], number[],number[], number[],number[],number[],number[]];
         hasCoffee: boolean;
         hasFood: boolean;
         hasLine: boolean;
         rating: number;
      }

   ```