application: vis_filter_demo {
  label: "Vis Filter Demo"
  url: "http://localhost:8080/bundle.js"
  entitlements: {
    core_api_methods: ["lookml_model_explore", "query", "query_for_slug", "run_query", "create_query"]
  }
}
