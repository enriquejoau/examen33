$(document).ready(function() {
    $("#tablita").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
                text: "SUCURSAL",
                key: "sede"
            },
            {
                text: "CLIENTE",
                key: "name"
            },
            {
                text: "FECHA",
                key: "date"
            },
            {
                text: "DOCUMENTO",
                key: "document"
            },
        ],

        //carga de datos
        data: [{
                sede: 'Santa Anita',
                name: 'Enrique Matencio',
                date: '12/02/2019',
                document: 'Factura'
            },
            {
                sede: 'Vitarte',
                name: 'Alvaro Alva',
                date: '15/03/2019',
                document: 'Boleta'
            },
            {
                sede: 'Ate',
                name: 'Luis Elviz',
                date: '14/06/2018',
                document: 'Factura'
            },
            
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="X" class="btn btn-danger" />',
            editButton: '<input type="button" value="E" class="btn btn-warning" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function(columnKey) {
            if (columnKey == "age") {
                return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
                return '<select class="form-control"><option value = "Z" > Zoom </option><option value = "M" > Google Meet </option></select> ';
            }

            return '<input type="text" class="form-control" />';
        }

    });
});