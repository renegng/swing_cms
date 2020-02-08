import { isNull } from 'util';

// FirebaseUI config.
var fbUIConfig = {
    signInSuccessUrl: '/home/',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url/callback.
    tosUrl: '/terminosdelservicio/',
    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
        window.location.assign('/politicaprivacidad/');
    }
};

// Initialize the FirebaseUI Widget using Firebase.
var fbUI = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
if (!isNull(document.querySelector('#firebaseui-auth-container'))) {
    fbUI.start('#firebaseui-auth-container', fbUIConfig);
}

// Track Auth State
var fbInitApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function (accessToken) {
                document.getElementById('user-profile-picture-input').src = photoURL;
                document.getElementById('username-input').value = displayName;
                document.getElementById('user-email-input').value = email;
                document.getElementById('user-data-provider-input').value = providerData[0].providerId;
                //   document.getElementById('account-details').textContent = JSON.stringify({
                //     displayName: displayName,
                //     email: email,
                //     emailVerified: emailVerified,
                //     phoneNumber: phoneNumber,
                //     photoURL: photoURL,
                //     uid: uid,
                //     accessToken: accessToken,
                //     providerData: providerData
                //   }, null, '  ');
            });
        } else {
            // User is signed out.
            document.getElementById('user-profile-picture-input').src = "../static/images/manifest/icon-192x192.png";
            document.getElementById('username-input').value = "-";
            document.getElementById('user-email-input').value = "-";
            document.getElementById('user-data-provider-input').value = "-";
        }
    }, function (error) {
        console.log(error);
    });
};

if (!isNull(document.querySelector('.s-user-info'))) {
    window.addEventListener('load', function () {
        fbInitApp()
    });
}