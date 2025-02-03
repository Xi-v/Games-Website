from flask import Flask, send_from_directory
import webbrowser
import threading

# This script is only designed for if you want to local host it, instead of using the actual website
# I found this could be useful if you have a school computer, and want the school to not be able to shut down the website
# The only problem is, is that if you can't open ports on your computer it won't work.
# Also you will want to run the command "pip install flask" for this script to work
# Have fun not learning!

app = Flask(__name__)

@app.route("/")
def serve_index():
    return send_from_directory(".", "index.html")

@app.route("/<path:filename>")
def serve_static(filename):
    return send_from_directory(".", filename)

def open_browser():
    webbrowser.open("http://127.0.0.1:8000")

if __name__ == "__main__":
    threading.Timer(5, open_browser).start()
    app.run(debug=True, host="0.0.0.0", port=8000)
