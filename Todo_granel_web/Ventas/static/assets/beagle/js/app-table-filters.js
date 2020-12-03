/*!
 * Beagle v1.7.1
 * https://foxythemes.net
 *
 * Copyright (c) 2019 Foxy Themes
 */

var App = (function () {
  'use strict';

  App.tableFilters = function( ){ 

    //Select2 init
    $('.select2').select2({
      width: '100%'
    });
    
    //Select2 tags init
    $('.tags').select2({tags: true, width: '100%'});

    //Bootstrap Slider init
    $('.bslider').bootstrapSlider();    

    //Date Picker init
    $(".datetimepicker").datetimepicker({
      autoclose: true,
      componentIcon: '.mdi.mdi-calendar',
      format: 'mm/dd/yyyy',
      navIcons:{
        rightIcon: 'mdi mdi-chevron-right',
        leftIcon: 'mdi mdi-chevron-left'
      }
    });

    //Filters
    $.fn.dataTable.ext.search.push(
      function( settings, searchData, index, rowData, counter ) {
        //Tipo Accion
        var filter_open = $('#tacc-open').is(':checked');
        var filter_close = $('#tacc-close').is(':checked');
        var filter_sign = $('#tacc-sign').is(':checked');
        var filter_vb = $('#tacc-vb').is(':checked');
        var status = $(settings.aoData[index].nTr).attr('class').split(" ");

        //Select2        
        var filter_project = $('.select2').val();
        var project = $(settings.aoData[index].anCells[2]).data('project');

        //Milestone slider
        var filter_progress = $('#milestone_slider').val().split(',');
        var progress = $(settings.aoData[index].anCells[3]).data('progress').split(',');

        //Date
        var filter_date_since = $('#dateSince').val() !== '' ? new Date($('#dateSince').val()) : new Date('01/01/1999');
        var filter_date_to = $('#dateTo').val() !== '' ? new Date($('#dateTo').val()) : new Date('01/01/2099');
        var date = new Date($('.date', settings.aoData[index].anCells[5]).html());

        //Conditional filters
        if( !(parseInt(progress[1]) >= parseInt(filter_progress[0]) && parseInt(progress[1]) <= parseInt(filter_progress[1])) ){ return false; }
        if( !(filter_project == project || filter_project == 'All') ){ return false; }
        if( !(date >= filter_date_since && date <= filter_date_to) ){ return false; }
        if( !(filter_open == false && filter_close == false && filter_sign == false && filter_vb == false || filter_open == true && (status[1] == 'OPEN' || status[1] == 'SIGN' || status[1] == 'VB') || filter_close == true && status[1] == 'CLOSE' || filter_sign == true && status[1] == 'SIGN' || filter_vb == true && status[1] == 'VB') ){ return false; }

        return true;
      }
    );
    
    //Table init
    var table = $('#tablaprincipal').DataTable({
      pageLength: 5,
      language: {
                  info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
                  infoEmpty: "Mostrando 0 a 0 de 0 registros",
                  infoFiltered: "(filtrado de _MAX_ registros totales)",
                  paginate: {
                              next: "Siguiente",
                              previous: "Anterior"
                            },
                  zeroRecords: "No hay registros que mostrar"
                },
      dom:  "<'row be-datatable-body'<'col-sm-12'tr>>" +
            "<'row be-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
    });

    //Tipo accion
    $('#tacc-open, #tacc-close, #tacc-sign, #tacc-vb').on('click', function(){
      table.draw();
    });

    //Select2 event
    $('.select2').on('change', function() {
      table.draw();
    });

    //Slider event
    $('#milestone_slider').slider().on('slide',function(e){
      var v1 = e.value[0];
      var v2 = e.value[1];

      $('#slider-value').html( v1 + '%' + ' - ' + v2 + '%');
      table.draw();
    });

    //Date since-to
    $('#dateSince, #dateTo').on('change', function(){
      table.draw();
    });
  };

  return App;
})(App || {});
