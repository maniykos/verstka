/**
 * Created by oleg on 24.10.2016.
 */
wpResizeTable = {
    init: function () {
        var lengthTH = 0;
        var lengthTr = 0;
        var id_table = $('.wp-table-resize');
        lengthTh = $('.wp-table-resize thead tr th').length;
        //add text from header table
        for (var i=2; i < lengthTh+1; i++) {
            var item = $('.wp-table-resize thead tr th:nth-child('+i+')').text();
//                $('.wp-table-resize tbody tr td:nth-child('+i+')').attr('data-vp_colname', item)
            $('.wp-table-resize tbody tr td:nth-child('+i+')').prepend('<label>'+item+'</lable>')
        }
        lengthTr = $('.wp-table-resize tbody tr').length;
        for (var i=1; i < lengthTr+1; i++) {
            $('.wp-table-resize tbody tr:nth-child('+i+')').attr('data-rowname', i);
            $('.wp-table-resize tbody tr:nth-child('+i+') td:nth-child(1)').append('<a href="javascript:void(0);" type="button" class="wp-show-info-bt" onclick="wpResizeTable.showInfo('+i+')"><i class="glyphicon glyphicon-chevron-down"></i></a>')
        }
    },
    showInfo: function (item) {
        if($('.wp-table-resize tbody tr[data-rowname = '+item+']').hasClass('is_expanded')){
            $('.wp-table-resize tbody tr.is_expanded').removeClass('is_expanded');
            $('.wp-table-resize tbody tr .wp-show-info-bt i.glyphicon').addClass('glyphicon-chevron-down');
            $('.wp-table-resize tbody tr .wp-show-info-bt i.glyphicon').removeClass('glyphicon-chevron-up');
        }else{
            $('.wp-table-resize tbody tr.is_expanded').removeClass('is_expanded');
            $('.wp-table-resize tbody tr[data-rowname = '+item+']').addClass('is_expanded');

            $('.wp-table-resize tbody tr .wp-show-info-bt i.glyphicon').addClass('glyphicon-chevron-down');
            $('.wp-table-resize tbody tr .wp-show-info-bt i.glyphicon').removeClass('glyphicon-chevron-up');

            $('.wp-table-resize tbody tr[data-rowname = '+item+'] .wp-show-info-bt i.glyphicon').removeClass('glyphicon-chevron-down');
            $('.wp-table-resize tbody tr[data-rowname = '+item+'] .wp-show-info-bt i.glyphicon').addClass('glyphicon-chevron-up');
        }
    }
};
$( document ).ready(function() {
    wpResizeTable.init();
});