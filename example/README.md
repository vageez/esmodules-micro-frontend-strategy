### FROM END MODULE ARCHITECTURE EXAMPLE

This Example demonstrates running the Host App in development mode, while consuming built Sub App Modules from a remote
endpoint.

How to run the example.

# STEP 1

### host.app/

1. Go to host.app/package.json
2. Run npm install
    * <i>This will bring in vite dependencies needed to enable local development.</i>

# STEP 2

### sub.app1/ & sub.app2/

1. Nothing to do. These apps are already built and ready to be served from their designated ports.

# STEP 3

1. Go to package.json in the root of the example directory.
2. Run npm install
3. Run npm run dev
    * This will start the host app in development mode.
    * The host app will be available at  http://localhost:5173/
    * The sub apps will be available at http://localhost:8077
      and http://localhost:8078

That's it. You should now be able to see the host app running in development mode, consuming the sub apps from the
remote



 
