import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/collection.js';
import '../imports/api/users'

Accounts.emailTemplates.siteName = "jenkins";
Accounts.emailTemplates.from = "jenkins@mediax.gr.jp";
Accounts.emailTemplates.resetPassword = {
    subject(user) {
        return "（demo）パスワードリセット";
    },
    text(user, url) {
        url = url.replace('\#\/reset-password', 'reset2-password')
        const mess = `以下のリンクをクリックするとパスワードリセット画面に飛びます。
（注意）このメールに返信は行わないようお願いします。

`; // end
        return (mess + url);
    }
}

let now = new Date()
let opt = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', weekday: 'short' }
let wareki = now.toLocaleDateString("ja-JP-u-ca-japanese", opt)
console.log("*****datetime-test*****")
console.log(wareki)
console.log("*****datetime-test*****")

Meteor.startup(() => {

});
