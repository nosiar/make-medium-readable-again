const removeNav = () => {
  const garbage = document.querySelector('nav')
  if (garbage) {
    const garbage2 = garbage.nextSibling
    if (garbage2) {
      garbage2.parentNode.removeChild(garbage2)
    }
    garbage.parentNode.removeChild(garbage)
  }
}

const removePopup = () => {
  const trashPopup = document.querySelector('#susi-entry-point-post_prompt')
  if (trashPopup) {
    const closeButton = trashPopup.previousSibling.querySelector('button')
    closeButton.click()

    console.log('[MMRA] cleared')
  }
  //const trashPopup = document.querySelector('#susi-modal-background')
}

const observer = new MutationObserver((mutations) =>
  mutations.forEach(() => {
    removePopup()
    removeNav()
  }),
)

const isMedium = document.querySelector(
  'head meta[property="al:ios:app_name"][content="medium" i]',
)

if (isMedium) {
  removeNav()
  removePopup()
}
