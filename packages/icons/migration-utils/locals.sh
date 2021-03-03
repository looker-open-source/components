#!/bin/bash

localIcons=('Account' 'AnalyticsApp' 'Beaker' 'BrowseTable' 'CalendarDay' 'CalendarHour' 'CalendarMonth' 'CalendarQuarter' 'CalendarWeek' 'ChartArea' 'ChartBar' 'ChartBoxPlot' 'ChartTimeline' 'CheckProgress' 'CollapseAll' 'ColorFill' 'ColorText' 'CrossFilter' 'DashboardFile' 'DashboardGauge' 'DigitalMarketingApp' 'DimensionFill' 'DocumentFile' 'DoubleChevronLeft' 'Download' 'ExpandCollapse' 'Explore' 'FieldString' 'FieldTier' 'FindSelected' 'Flag' 'GitBranch' 'IdeDimension' 'IdeDimensionGroup' 'IdeFileDashboard' 'IdeFileDocument' 'IdeFileGeneric' 'IdeFileLookMl' 'IdeFileManifest' 'IdeFileModel' 'IdeParameter' 'LogoRings' 'LookerLogo' 'Lqa' 'Marketplace' 'ModelFile' 'More' 'Notes' 'Pivot' 'Public' 'QuickStart' 'Reports' 'Return' 'SalesAnalytics' 'SendWebhook' 'SqlRunner' 'UserAttributes' 'ViewFile' 'VisArea' 'VisBar' 'VisColumn' 'VisLine' 'VisMap' 'VisPie' 'VisScatter' 'VisSinglueValue' 'VisTable')

for icon in ${localIcons[@]}; do
  echo "Update $icon"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/icon=\"$icon\"/icon={<$icon \/>}/g"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/name=\"$icon\"/icon={<$icon \/>}/g"
done
