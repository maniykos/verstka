/*
 * @since      1.0.0
 * @package    Preloader
 * @author     oleg.l <oleg.l@wecandevelopit.com>
 *
 *     item: string - 'show', 'hide'
 */
function jpreloader(item) {
    if (item == 'show') {
        $(document.body).append('<div class="jpreloader" style="z-index: 90000;"></div>');
    } else {
        $('.jpreloader').remove();
    }
}