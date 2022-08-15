# NODE-6 Create a EXPRESS server with 5 routes to display the following from array (datastore + Postman)          

* get /api/products   -- GET ALL API             
* get /api/products/1   -- GET a Product API (If item not found handle the error)                                               
* post /api/products   -- Create a Product API (create a new item with an automated ID) and(price  required and greater than 20 and name required - more than 3 chars and less than 10 chars)   and name of teh product cannot be repeated
* put  /api/products/1   -- Update a product API (handle if item not found or update the same and show the updated item as  response)            
* delete  /api/products/1   -- Delete a product API  (handle if item not found, or delete and show the deleted item as response)                                             
* Add own filters with route (price between)  (no I/P required)       
* Add own filter with route (product starting with 'A' ) (no I/P required)                                 
* Note: Input via PARAMS or BODY in POSTMAN                                               
