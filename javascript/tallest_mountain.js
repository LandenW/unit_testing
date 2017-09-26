function tallestMountain(mntns) {
    mntns.sort(function(a, b){return a - b});
    return mntns [ mntns.length - 1];
}
module.exports = tallestMountain