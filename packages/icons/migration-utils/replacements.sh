#!/bin/bash

localIcons=('Account' 'AnalyticsApp' 'Beaker' 'BrowseTable' 'CalendarDay' 'CalendarHour' 'CalendarMonth' 'CalendarQuarter' 'CalendarWeek' 'ChartArea' 'ChartBar' 'ChartBoxPlot' 'ChartTimeline' 'CheckProgress' 'CollapseAll' 'ColorFill' 'ColorText' 'CrossFilter' 'DashboardFile' 'DashboardGauge' 'DigitalMarketingApp' 'DimensionFill' 'DocumentFile' 'DoubleChevronLeft' 'Download' 'ExpandCollapse' 'Explore' 'FieldString' 'FieldTier' 'FindSelected' 'Flag' 'GitBranch' 'IdeDimension' 'IdeDimensionGroup' 'IdeFileDashboard' 'IdeFileDocument' 'IdeFileGeneric' 'IdeFileLookMl' 'IdeFileManifest' 'IdeFileModel' 'IdeParameter' 'LogoRings' 'LookerLogo' 'Lqa' 'Marketplace' 'ModelFile' 'More' 'Notes' 'Pivot' 'Public' 'QuickStart' 'Reports' 'Return' 'SalesAnalytics' 'SendWebhook' 'SqlRunner' 'UserAttributes' 'ViewFile' 'VisArea' 'VisBar' 'VisColumn' 'VisLine' 'VisMap' 'VisPie' 'VisScatter' 'VisSinglueValue' 'VisTable')

for icon in ${localIcons[@]}; do
  echo "Update $icon to <$icon /> from @looker/icons"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/icon=\"$icon\"/icon={<$icon \/>}/g"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/name=\"$icon\"/icon={<$icon \/>}/g"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/iconBefore=\"$icon\"/iconBefore={<$icon \/>}/g"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/iconAfter=\"$icon\"/iconAfter={<$icon \/>}/g"
done


icons='AddAlerts add_alert
AddComment add_comment
AlignCenter format_align_center
AlignLeft format_align_left
AlignRight format_align_right
API device_hub
ApplicationSelect apps
ArrowBackward arrow_back
ArrowDownward arrow_downward
ArrowDropDown arrow_drop_down
ArrowDropUp arrow_drop_up
ArrowForward arrow_forward
ArrowLeft arrow_left
ArrowRight arrow_right
ArrowUpward arrow_upward
Block block
Board assignment
CacheRefresh cached
Calendar date_range
CenterFocus center_focus_weak
CaretDown expand_more
CaretLeft chevron_left
CaretRight chevron_right
CaretUp expand_less
ChangeHistory change_history
ChartColumn bar_chart
ChartCustom multiline_chart
ChartDonutMultiples donut_large
ChartFunnel filter_list
ChartLine show_chart
ChartMap map
ChartPie pie_chart
ChartScatterplot bubble_chart
ChartSingleRecord toc
ChartSingleValue looks_6
ChartTable table_chart
ChartWaterfall waterfall_chart
ChartWordcloud line_style
Chat chat
Check done
CircleAdd add_circle
CircleAddOutline add_circle_outline
CircleCancel cancel
CircleCheck check_circle
CircleExplore explore
CircleInfo info
CircleInfoOutline info
CircleQuestion help
CircleQuestionOutline help
CircleRemove remove_circle
Clipboard assignment
Clock schedule
Close close
Code code
Comment comment
Dashboard dashboard
DNS dns
DotsHorz more_horiz
DotsVert more_vert
DoubleChevronRight double_arrow
DragHandle drag_handle
DragHandleDots drag_indicator
Edit create
EditOutline create
ExpandMore expand_more
ExploreOutline explore
External launch
Error error
ErrorOutline error
FactCheck fact_check
Favorite favorite
FavoriteOutline favorite
Feedback feedback
FeedbackOutline feedback
FieldDate calendar_today
FieldDuration hourglass_empty
FieldLocation place
FieldNumber tag
FieldYesNo check
File note
FileBlank insert_drive_file
Filter filter_list
Folder folder
FolderClosed folder
FolderMove drive_file_move
FolderNew create_new_folder
FolderOpen folder_open
FolderShared folder_shared
FormatBold format_bold
FormatItalic format_italic
FormatListBullet format_list_bulleted
FormatListNumbered format_list_numbered
FormatQuote format_list_numbered
FormatTitle title
FormatUnderlined format_underlined
Functions functions
Gear settings
GearOutline settings
Group group
Hamburger menu
Help live_help
Home home
IdeFileStrings language
IdeFileView table_chart
Image insert_photo
Key vpn_key
Link link
LockClosed lock
Logout logout
Mail email
Minus remove
MultiSelect library_add_check
Note insert_drive_file
NoteOutline insert_drive_file
NotificationBellOff notifications
NotificationBellOn notifications_active
Pin push_pin
Plus add
Popular trending_up
Projects business_center
RecentActivity history
Redo redo
Refresh refresh
ScheduleOutline send
Search search
SectionDrop branding_watermark
SendEmail email
SendSftp drive_file_move
Share share
ShareAlt ios_share
SortAlpha sort_by_alpha
Space assignment
Style style
Sync sync_alt
Table table_chart
TextFormat text_format
TimeZone language
Trash delete
TrashOutline delete
Tune tune
Undo undo
UnusedContent low_priority
Update update
User person_outline
Validate verified_user
ViewColumn view_column
ViewGrid grid_view
Visibility visibility
VisibilityOff visibility_off
VisibilityOutline visibility
Visualization assessment
Warning warning
WarningOutline warning'

IFS=$'\n' iconSet=($icons)

for icon in ${iconSet[@]}; do
  IFS=' ' read -ra iconParts <<< "$icon"
  old=(${iconParts[0]})
  new=$(echo ${iconParts[1]} | sed -r 's/(^|_)([a-z])/\U\2/g')

  echo "Move $old to <$new />"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/icon=\"$old\"/icon={<$new \/>}/g"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/name=\"$old\"/icon={<$new \/>}/g"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/iconBefore=\"$old\"/iconBefore={<$new \/>}/g"
  find . -type f -name "*.tsx" -print0 | xargs -0 sed -i -e "s/iconAfter=\"$old\"/iconAfter={<$new \/>}/g"
done
