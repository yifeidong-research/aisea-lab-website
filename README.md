# AI-SEA Lab website

Static Astro and TypeScript site for the AI Systems Engineering & Assurance Lab at the UTS Data Science Institute.

## Work on the site

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

- Update the mission, programme, themes, profile records, publication records, individual projects and public email in `src/content/site.ts`.
- Page templates are in `src/pages/` and the shared layout and styling are in `src/layouts/` and `src/styles/`.
- Add confirmed material with the institution’s applicable publication permissions. The lab mark is site-specific. Use of the UTS logo requires appropriate authorisation.
- Astro emits the six public pages and a custom 404 to `dist/`. Deployment configuration is copied from `public/staticwebapp.config.json`.

## UTS GitLab and Azure testing deployment

1. Use a **Private** UTS GitLab project named `aisea-lab-website`. Commit this source tree and the lockfile. Protect the default branch and use a UTS-authorised GitLab runner that supports the configured Node image and can reach npm and Azure Static Web Apps. If UTS requires a runner tag, add the assigned tag before running the pipeline.
2. In the authorised UTS subscription, use a permitted resource group and confirm that applicable policy allows public hosting. Create **Azure Static Web Apps** on the **Free** plan with **Deployment source → Other**. The site uses only static hosting. Review the selected SKU and provision only approved resources.
3. In GitLab **Settings → CI/CD → Variables**, add `SWA_CLI_DEPLOYMENT_TOKEN` from the app’s **Manage deployment token** panel. Protect it, use **Masked and hidden** if supported (otherwise **Masked**), leave expansion disabled and scope it to `azure-test` where supported. Enter the secret directly in GitLab.
4. Add `AZURE_SWA_URL` as a protected variable with **All** environment scopes so GitLab can evaluate deploy rules. Set its value to the app’s Azure-generated HTTPS URL, for example `https://<generated-name>.azurestaticapps.net`. This variable is a public URL. Run a fresh pipeline on the protected default branch after setting both variables.
5. Confirm that GitLab’s build and deploy jobs pass and that the Azure URL loads all six pages and returns the custom 404 for a missing path. The deploy job runs this HTTP check automatically. The Azure environment is named `production` by the SWA CLI because it uses the app’s primary endpoint. GitLab labels it `azure-test` to reflect its purpose.

Pipelines build and type-check on every branch. The deploy job runs when the protected default branch and Azure URL are present. The app is publicly reachable by URL and carries a `noindex` header for testing. Remove that header when the site is ready for search indexing. Submit updates through the project’s normal review process. To roll back, revert the change on the default branch and let GitLab redeploy.

## Domain

The generated Azure URL is sufficient for testing. When an approved domain has been registered, use **Static Web App → Custom domains** and follow Azure’s DNS and TLS verification steps. Domain purchase and renewal require separate approval.

References

- [Azure plan comparison](https://learn.microsoft.com/azure/static-web-apps/plans)
- [Azure SWA CLI deployment](https://learn.microsoft.com/azure/static-web-apps/static-web-apps-cli-deploy)
- [GitLab CI/CD variables](https://docs.gitlab.com/ci/variables/)
- [UTS Website Policy](https://www.uts.edu.au/about/leadership-governance/policies/a-z/website-policy)
