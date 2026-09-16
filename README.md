# itsm-highvelocity-test-repo

HTTP service used for high-velocity ITSM deployment tracking.

## Run

```bash
npm install
npm start        # listens on $PORT, default 8080
npm test
```

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/health` | Liveness, returns service name and version |
| GET | `/api/items` | List items |

## Deployments

Releases are tagged `release-<semver>` and each one records a
deployment against the `Production` environment.

Test test
