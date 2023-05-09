# sample-project

## Run locally

By default, you need to run the frontend and the backend locally.

A login page is also expected, but it is not necessary for this sample flow.

You can tweak setupProxy.js to run your local frontend on a remote backend, for example.

## CI/CD

The project provides a `ci/cloudbuild.yaml` file which contains the Google CI config, and a `deployment/helm/sample-project` file which contains the Helm chart for the CD.
