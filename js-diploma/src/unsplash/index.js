import Unsplash, { toJson } from 'unsplash-js';


export const unsplash = new Unsplash({
    applicationId: "m6iCbcrRFUKCnAdpIW0yLKtnomdbfC9Nl3uBFlcTr2s",
    secret: "M05ape92lboiXtDeJ17E7dfpM8AkCEhRxqDdGHuVxRQ",
    callbackUrl: "http://monarch-web.ru/js-diploma/auth",
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

export const setAccessTokenUnplash = (code) => {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json =>
            localStorage.setItem('token', json.access_token)
        );
};

export const listPhoto = (start, end, access_token) => {

    unsplash.auth.setBearerToken(access_token);
    console.log(access_token);
    return unsplash.photos.listPhotos(start, end, "latest")
        .then(res => res.json());
};

export const likePhoto = (id, token) => {
    unsplash.auth.setBearerToken(token);
    console.log(token);
    unsplash.photos.likePhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
        });
};

export const unLikePhoto = (id, token) => {
    unsplash.auth.setBearerToken(token);
    console.log(token);
    unsplash.photos.unlikePhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
        });
};