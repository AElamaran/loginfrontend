export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Email can't be empty."
    if (!re.test(email)) return 'Type valid email address.'
    return ''
}
  