fetch('https://api.github.com/users/VitorLopesW')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // DOM variables
            const avatar = document.querySelector('.profile-avatar')
            const profileName = document.querySelector('.profile-name')
            const profileUsername = document.querySelector('.profile-username')
            const profileRepos = document.querySelector('.profile-repos')
            const profileFollowers = document.querySelector('.profile-followers')
            const profileFollowing = document.querySelector('.profile-following')
            const profileLink = document.querySelector('.profile-link')
        // DOM manipulation
            avatar.src = data.avatar_url
            profileName.textContent = data.name
            profileUsername.textContent = "@" + data.login
            profileRepos.textContent = data.public_repos
            profileFollowers.textContent = data.followers
            profileFollowing.textContent = data.following
            profileLink.href = data.html_url



    })