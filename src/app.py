from dash import dcc, Output, Input, Dash, html, ClientsideFunction
import dash_bootstrap_components as dbc

app = Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])
server = app.server
app.title = 'AbaTimer' 

app.layout = dbc.Container([
        dcc.Interval(id='interval', interval=16, n_intervals=0),
        dbc.Row([
            dbc.Col(html.H1("Faltam 👇 pro Abaday", className="text-center mt-5"))
        ]),
        dbc.Row([
            dbc.Col(html.H2(id="client-time", style={"fontSize": "76px", "fontWeight": "bold"}, className="text-center mt-5"))
        ]),
        dbc.Row([
            dbc.Col([
                html.A('ACO - Abaday Chief Officer', href='https://www.instagram.com/abarnoo/'),
            ]),
        ], className='footer', justify='center'),
], fluid=True, style={"display": "flex", "flexDirection": "column", "justifyContent": "center", "height": "100vh"})

# CLIENTSIDE CALLBACKS =======================
# using clientside callback (remember to create the clientside.js file in the assets folder!)
app.clientside_callback(
    ClientsideFunction(
        namespace='clientside',
        function_name='update_timer'
    ),
    Output('client-time', 'children'),
    [Input('interval', 'n_intervals')])

if __name__ == '__main__':
    app.run_server(debug=False)