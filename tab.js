(()=>{
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');             
    const $nav = $tab.querySelectorAll('[data-nav');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navlen = $nav.length

    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    const handleClick = (e) => {
        e.preventDefault();

        //クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        let index = 0;
        while(index < navlen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        console.log('targetVal!', targetVal);

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);

    };


    // 全nav要素に対して関数を適用、発行
    let index = 0;
    while(index < navlen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }


})();