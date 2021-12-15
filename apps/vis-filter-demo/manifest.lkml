application: filter_demo {
  label: "Vis Filter Demo"
  url: "http://localhost:8080/bundle.js"
  entitlements: {
    core_api_methods: ["query","query_for_slug", "run_query", "create_query"]
  }
}
