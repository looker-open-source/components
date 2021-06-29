application: filter_demo {
  label: "Filter Demo"
  url: "http://localhost:8080/bundle.js"
  entitlements: {
    core_api_methods: ["theme_or_default", "all_dashboards", "dashboard", "update_dashboard", "model_fieldname_suggestions"]
    navigation: yes
    use_embeds: yes
  }
}
