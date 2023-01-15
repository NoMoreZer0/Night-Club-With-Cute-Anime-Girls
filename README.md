# Night-Club-With-Cute-Anime-Girls
Netflix like anime watching website 

## API Explanations: 

### Authentication: 
  You will need to put JWT token to header like "Bearer + Your token" in order to access some requests
  1) POST /api/auth/register -> (register your user)
  2) POST /api/auth/login -> (login your user and return to you JWT access token)
  
### User Interaction:
  1) PUT /api/users/:id -> (update corresping user with :id you need to be authenticated admin)
  2) DELETE /api/users/:id -> (delete corresping user with :id you need to be authenticated admin)
  3) GET /api/users/find/:id -> (get corresping user with :id credentials)
  4) GET /api/users/ -> (get all registered users you need to be authenticated admin)

### Animes Interaction:
  1) POST /api/animes -> (create anime)
  2) PUT /api/animes/:id -> (update anime with corresping :id)
  3) DELETE /api/animes/:id -> (delete anime with corresping :id you need to be authenticated admin)
  4) GET /api/animes/find/:id -> (get corresping anime with :id)
  5) GET /api/animes/random -> (get random list of animes)
  6) GET /api/animes -> (get all animes you need to be authenticated admin)
  
### List Interaction:
  Every List Interaction needs you to be authenticated admin
  1) POST /api/lists (create list)
  2) DELETE /api/lists/:id (delete list with corresponding :id)
  3) GET /api/lists (get all lists)

### Additional Information 
  In order to create/register/login some data you will need to provide raw json with corresping fields. Information about which fields you can find in "api/models" folder.
