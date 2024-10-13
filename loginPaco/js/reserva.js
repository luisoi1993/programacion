(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);

			$this.focus(function(){
				$this.next().addClass("active");
			});

			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}

	floatLabel(".floatLabel");
})(jQuery);
