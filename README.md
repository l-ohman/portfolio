# my portfolio

originally built in december 2022. updated in august 2023, and again in february 2024.

https://l-ohman.com/

---

## Deploying to Github Pages

```
npm run build-and-deploy
```

The command above runs the following:

```
npm run build
npm run fix-paths
npm run deploy
```

`npm run build` is simply the CRA build command. `npm run fix-paths` runs the python script, `deploy.py`, which updates asset/img paths where necessary. (For whatever reason, the CRA build creates these paths incorrectly.) `npm run deploy` uses the `gh-pages` package to deploy the local `/build` folder directly to Github Pages by placing its contents on a separate branch.

Redeploying usually causes DNS issues, which can easily be resolved here:
https://github.com/l-ohman/portfolio/settings/pages

<!-- misc idea -- a "workshop" subpage, where i can show test projects and things that are currently in flight -->
