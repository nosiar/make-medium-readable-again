const removeHeader = () => {
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

const removePardon = () => {
  const trashHeadings = document.evaluate(
    "//h1[contains(., 'Pardon the interruption.')]",
    document,
    null,
    XPathResult.ANY_TYPE,
    null,
  )
  const trashHeading = trashHeadings.iterateNext()
  if (trashHeading) {
    var trash = trashHeading.parentNode.parentNode.parentNode.parentNode
    trashshit.parentNode.removeChild(trash)
  }
}

const isMedium = document.querySelector(
  'head meta[property="al:ios:app_name"][content="medium" i]',
)

if (isMedium) {
  removeHeader()
  removePardon()
}
