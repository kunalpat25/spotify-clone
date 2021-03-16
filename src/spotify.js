// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'https://spotify-clone-7d027.web.app/'
const clientId = '768768e2df3d4ce987d25fbffcab892b'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

// http://localhost:3000/#access_token=BQAnVostOVRlFr3KY5tA7qMnt21QycodHN1ylDdRTFgg0fqWnXwUqV_V-N8YLvxO-K-vjQobsAjkal3E8YMpzcbAGyYfId19VTwHhsiNG1ztNmT0gBpp-s0goJz3miyS3kYghs3plda2z_Y_OHRGWHII0__d-LOTWSPatTruAShleJnIqNoj&token_type=Bearer&expires_in=3600
export const getTokenFromUrl = () => {
    return window.location.hash //gives string after hash from url
      .substring(1)  // gives substring from that string from index '1'
      .split("&") // splits the string with '&' as a separator and returns array of splitted strings
      .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {}); //gives the access token from that string
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=token&show_dialog=true`;


