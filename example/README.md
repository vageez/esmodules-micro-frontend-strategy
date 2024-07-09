### ESMODULES

Basic example of using ESMODULES to create a micro frontend architecture.

```
// EG:
import React from "https://esm.sh/react@beta";
import SubApp from "https:my-domain/subapp/index.js";

```

### Why a package.json

Sole purpose of the package.json is to serve the host app and 2 sub apps in order to test the example.

-- Host App is running on port 8075
-- Sub App 1 is running on port 8077
-- Sub App 2 is running on port 8078

In essence Sub App 1 and 2 are served from endpoints that are different from the Host App.
Allowing for development and deployment of Sub apps to be decoupled from the Host and other Sub apps. 
