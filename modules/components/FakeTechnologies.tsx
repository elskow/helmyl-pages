const FakeTechnologies = () => {
    return (
        <>
            <div className="aspNetHidden" style={{ display: 'none' }}>
                <input
                    type="hidden"
                    name="__VIEWSTATEGENERATOR"
                    id="__VIEWSTATEGENERATOR"
                    value="71891709"
                />
                <input
                    type="hidden"
                    name="__EVENTVALIDATION"
                    id="__EVENTVALIDATION"
                    value="/wEdAAUlrobvPz2cv7jIIZx6SdWEyvLAEmW17KJc/0whW4xPZO7RLADZm46XRP45LfnJejD6ac5/4MVxG4SMkdGj8uGNZHwODS+/32/3Tj1bRSppsZS51KSKg0GdEovPDpyG1bg+2StZ"
                />
            </div>
            <div style={{ display: 'none' }}>
                <form action="/cgi-bin/koha/opac-user.pl" method="post" name="auth" id="modalAuth">
                    <div className="modal-body">
                        <input type="hidden" name="koha_login_context" value="opac" />
                        <fieldset className="brief">
                            <label htmlFor="muserid">username :</label>
                            <input type="text" id="muserid" name="userid" />
                            <label htmlFor="mpassword">password:</label>
                            <input type="password" id="mpassword" name="password" />
                            <div id="forgotpassword-modal">
                                <a href="/cgi-bin/koha/opac-password-recovery.pl"></a>
                            </div>
                        </fieldset>
                    </div>
                    <div className="modal-footer">
                        <input type="submit" value="login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value="dhLET8KO9DYpu29yAa8NRaOgjCXii0rZvyj7hZg5mWT50b1ojrwJNLAJMDQmLsaq"
            />
            <meta name="generator" content="Jekyll v1945" />
            <meta name="generator" content="Hexo 1945" />
            <meta name="generator" content="Gatsby 1945" />
            <meta name="apple-mobile-web-app-title" content="CakePHP" />
            <meta name="application-name" content="CakePHP" />
            <link
                rel="stylesheet"
                type="text/css"
                href="phpmyadmin.css.php?lang=en-iso-8859-1&amp;convcharset=iso-8859-1&amp;collation_connection=utf8_unicode_ci&amp;token=355be9a934a5537fd5a7dea6b9145a06&amp;js_frame=right&amp;nocache=4099247312"
            />
        </>
    )
}

export default FakeTechnologies
