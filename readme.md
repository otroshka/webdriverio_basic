## Prerequirements to run test on local Selenoid Docker container

- Docker installed

- Download local images of browsers and drivers you want to run your tests against:


  docker pull selenoid/vnc:chrome_87.0

- Start Selenoid docker container:

```
docker run --rm                              \
  --name selenoid                                 \
  -p 4444:4444                                    \
  -v /var/run/docker.sock:/var/run/docker.sock    \
  -v $(pwd)/config/:/etc/selenoid/:ro              \
  aerokube/selenoid
```

## Run tests

You can run tests in 2 different ways:

- local browser both on Chrome and Firefox (local version installed on local machine) through the following command:

```
npm run test
```

- local run with Browsers and Drivers in Selenoid containers (as configured in config/browsers.json file):

```
npm run testci
```

Every push on the repo will trigger test run on GitHub CI on Chrome and Firefox last version (through Selenoid).

