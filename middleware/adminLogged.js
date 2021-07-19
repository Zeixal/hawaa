export default async function ({ redirect, store }) {
    let auth = store.state.admin.authenticatedStaff
    console.log(auth)
    if (auth == true) return redirect('/admin')

}