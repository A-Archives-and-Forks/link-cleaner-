// Save settings automatically to localStorage
document.querySelectorAll('input[type="checkbox"]').forEach(function (el) {
    el.addEventListener('change', function () {
        localStorage.setItem(el.id, el.checked)
        console.log('Saved setting:', el.id, el.checked)
    })
})
document.querySelectorAll('.settings-container input[type="text"]').forEach(function (el) {
    el.addEventListener('change', function () {
        localStorage.setItem(el.id, el.value)
        console.log('Saved setting:', el.id, el.value)
    })
})

// Load settings from localStorage
Object.entries(localStorage).forEach(function (key) {
    // Ignore link history and android app
    if (key[0] === 'history' || key[0] === 'android-app' || key[0] === 'mastodon-server') {
        return true
    }
    // Amazon ID settings
    if (key[0] === 'amazon-tracking-id') {
        console.log('Loaded setting:', key)
        document.getElementById('amazon-tracking-id').value = key[1]
        return true
    }
    // Other settings
    if (document.getElementById(key[0])) {
        console.log('Loaded setting:', key)
        document.getElementById(key[0]).checked = JSON.parse(key[1])
    }
})