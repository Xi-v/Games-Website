import os
import time
from pynput.keyboard import Controller, Key

def format_folder_name(folder_name):
    return ' '.join(word.capitalize() for word in folder_name.split('_'))

def generate_links(games_directory):
    try:
        keyboard = Controller()
        folders = [f for f in os.listdir(games_directory) if os.path.isdir(os.path.join(games_directory, f))]
        for folder in folders:
            formatted_name = format_folder_name(folder)
            link = f"<a href=\"{folder}/index.html\">{formatted_name}</a><br>"
            for char in link:
                keyboard.type(char)
                time.sleep(0.01)
            keyboard.press(Key.enter)
            keyboard.release(Key.enter)
            time.sleep(0.05)
        print("Links typed out successfully")
    except Exception as e:
        print(f"Error: {e}")

games_directory = "/Users/caele/OneDrive/Code/Projects/Games"

generate_links(games_directory)
