function accordion(triggersSelector, activeSelector, firstElemShow = false) {
	const accordionItemHeaders = document.querySelectorAll(triggersSelector)

	accordionItemHeaders.forEach(accordionItemHeader => {
		accordionItemHeader.addEventListener('click', event => {
			const currentlyActiveAccordionItemHeader = document.querySelector(activeSelector)

			if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
				currentlyActiveAccordionItemHeader.classList.toggle('active')
				currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0
			}

			accordionItemHeader.classList.toggle('active')

			const accordionItemBody = accordionItemHeader.nextElementSibling

			if (accordionItemHeader.classList.contains('active')) {
				accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
			} else {
				accordionItemBody.style.maxHeight = 0
			}
		})
	})

	// first accordion open by default, add active class html accordionItemHeaders
	function accordionFirstElemShow() {
		document.querySelector('.accordion__header').classList.add('active')
		accordionItemHeaders[0].nextElementSibling.style.maxHeight =
			accordionItemHeaders[0].nextElementSibling.scrollHeight + 'px'
	}
	if (firstElemShow) {
		accordionFirstElemShow()
	}
}
accordion('.accordion__header', '.active', true)
