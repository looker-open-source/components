import dateLocale from 'date-fns/locale/es'
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AdvancedInputControls": {
    "Clear Field": "Borrar campo"
  },
  "AvatarButton": {
    "Profile Picture": "Foto de perfil"
  },
  "AvatarUser": {
    "Avatar": "Avatar"
  },
  "BulkActions": {
    "AllPageCountDisplayedSelected": "Se seleccionaron los {{pageCount}} elementos mostrados",
    "AllTotalCountSelected": "Se seleccionaron los {{totalCount}} elementos",
    "Bulk Actions": "Acciones masivas",
    "Clear Selection": "Borrar selección",
    "SelectAllCountResults": "Seleccionar los {{totalCount}} resultados",
    "SelectedCountOfTotalDisplayed": "Se seleccionaron {{selectedItemCount}} de {{pageCount}} elementos mostrados"
  },
  "CalendarNav": {
    "next month": "mes siguiente",
    "previous month": "mes anterior"
  },
  "CheckMarkMixed": {
    "Check Mark Mixed": "Marca de verificación combinada"
  },
  "Chip": {
    "Delete": "Borrar"
  },
  "ColumnSelector": {
    "Apply": "Aplicar",
    "Cancel": "Cancelar",
    "Select All": "Seleccionar todo",
    "Select None": "No seleccionar nada",
    "Select columns to display": "Selecciona las columnas que quieres mostrar"
  },
  "ConfirmationDialog": {
    "Cancel": "Cancelar",
    "Confirm": "Confirmar"
  },
  "CopyToClipboard": {
    "Copied": "Se copió",
    "Copy to Clipboard": "Copiar en el portapapeles"
  },
  "DataTable": {
    "No Results": "No hay resultados"
  },
  "DataTableItem": {
    "Options": "Opciones"
  },
  "FieldTimeSelect": {
    "Please use format HHMM": "Utiliza el formato HH:MM"
  },
  "GetIntentLabel": {
    "Error": "Error",
    "Inform": "Informar",
    "Success": "Completado correctamente",
    "Warning": "Advertencia"
  },
  "InputDate": {
    "Open calendar": "Abrir calendario"
  },
  "InputDateRange": {
    "End date": "Fecha de finalización",
    "Start date": "Fecha de inicio"
  },
  "InputFilters": {
    "Clear Filters": "Borrar filtros",
    "Filter List": "Lista de filtros"
  },
  "InputTimeSelect": {
    "Select time": "Seleccionar hora"
  },
  "MessageBar": {
    "DismissIntent": "Descartar {{intent}}"
  },
  "ModalHeaderCloseButton": {
    "Close": "Cerrar"
  },
  "MonthPickerNav": {
    "close": "cerrar",
    "next year": "próximo año",
    "previous year": "año anterior"
  },
  "PageSize": {
    "Display": "Visualización",
    "of": "de"
  },
  "Pagination": {
    "First page of results": "Primera página de resultados",
    "Last page of results": "Última página de resultados",
    "Next page of results": "Siguiente página de resultados",
    "Previous page of results": "Página de resultados anterior",
    "of": "de"
  },
  "PanelHeader": {
    "CloseTitle": "Cerrar {{title}}"
  },
  "PopoverFooter": {
    "Done": "Listo"
  },
  "ProgressDuet": {
    "Processing request": "Procesando solicitud"
  },
  "PromptDialog": {
    "Cancel": "Cancelar",
    "Save": "Guardar"
  },
  "RangeSlider": {
    "Maximum Name": "Máximo de {{name}}",
    "Maximum Value": "Valor máximo",
    "Minimum Name": "Mínimo de {{name}}",
    "Minimum Value": "Valor mínimo"
  },
  "RequiredStar": {
    "required": "obligatorio"
  },
  "SelectOptions": {
    "Loading": "Cargando",
    "No options": "Sin opciones"
  },
  "TabList": {
    "Tabs": "Pestañas"
  }
}

    export const esES = mergeLocaleObjects(
      [
        
      ],
      'es-ES',
      resources,
      dateLocale,
    )