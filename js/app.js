function accordion(triggersSelector, activeSelector, firstElemShow = false) {
	const accordionItemHeaders = document.querySelectorAll(triggersSelector)

	accordionItemHeaders.forEach(accordionItemHeader => {
		accordionItemHeader.addEventListener('click', event => {
			const currentlyActiveAccordionItemHeader = document.querySelector(activeSelector)

			if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
				currentlyActiveAccordionItemHeader.classList.toggle('accordion-open')
				currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0
			}

			accordionItemHeader.classList.toggle('accordion-open')

			const accordionItemBody = accordionItemHeader.nextElementSibling

			if (accordionItemHeader.classList.contains('accordion-open')) {
				accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
			} else {
				accordionItemBody.style.maxHeight = 0
			}
		})
	})

	// first accordion open by default, add active class html accordionItemHeaders
	function accordionFirstElemShow() {
		accordionItemHeaders[0].classList.add('accordion-open')
		accordionItemHeaders[0].nextElementSibling.style.maxHeight =
			accordionItemHeaders[0].nextElementSibling.scrollHeight + 'px'
	}
	if (firstElemShow) {
		accordionFirstElemShow()
	}
}
accordion('.accordion__header', '.accordion-open', true)
