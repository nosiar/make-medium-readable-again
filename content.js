const removeNav = () => {
  const valuable = document.querySelector('article')

  if (!valuable) {
    alert('my assumption was wrong..')
  }

  const garbage = valuable.previousSibling
  if (garbage) {
    const garbage2 = garbage.previousSibling
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
  }
}

const isMedium = document.querySelector(
  'head meta[property="al:ios:app_name"][content="medium" i]',
)

if (isMedium) {
  removeNav()
  removePopup()
}
