$(function() {

  // form-select begin
  $('body').on('click', '.form-select', function(e) {
    var $value = $(this).find('.value'),
        $this = $(this),
        $target = $(e.target),
        $input = $(this).find('input');
        $options = $(this).find('ul');

    e.stopPropagation();

    if(e.target.tagName === 'LI') {
      var value = $target.data('value');
      if(value != $input.val()) {
        $input.val(value);
        $this.data('value', value).trigger('change');
        $value.text($target.text());
      }
      $options.hide();
    } else {
      $options.css('display') === 'block' ? $options.hide() : $options.show(); 
    }
  });

  $('body').on('val', '.form-select', function(e, value) {
    var $select = $(e.target),
        $input = $select.find('input'),
        $li = $select.find('[data-value='+ value +']');

    value+='';

    if(value === $input.val()) return;

    if($li.length) {
      $input.val(value);
      $select.find('.value').text($li.text());
      $select.data('value', value).trigger('change');
    }
  });

  $('body').on('click', function(e) {
    $('.form-select ul').hide();
  });

  // form-radio
  

  $('#region1').on('change', function() {
    var id = $(this).data('value');
    if(id) {
        loadRegion(2, id);
        $('#region3').trigger('val', '').find('ul li:not(:first-child)').remove();
    }
  });

  $('#region2').on('change', function() {
    var id = $(this).data('value');
    if(id) {
        loadRegion(3, id);
    }
  });

  function loadRegion(type, parent) {
    $.getJSON('http://100.84.85.122:8080/php/ecshop/upload/region.php', {
      type: type,
      parent: parent
    }, function(data) {
      var regions = data.regions,
          html = '<li data-value="">请选择</li>';

      if(regions && regions.length > 0) {
        $.each(regions, function(index, region) {
          html+='<li data-value="'+ region.region_id +'">'+ region.region_name +'</li>';
        });

        var $target = $('#region' + type);
        $target.find('ul').html(html);
        $target.trigger('val', '');
      }
    })
  }

  // 省
  loadRegion(1, 1);

})