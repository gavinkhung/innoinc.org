# adds all of the images in a directory to firebase storage

import os

from services.firebase import Firebase

if __name__ == "__main__":
    firebase = Firebase()

    images_dir = 'guides'
    images_path = os.listdir(images_dir)

    for image_path in images_path:
        image_name = image_path.replace(',', '')
        image_name = image_name.replace('_', '')
        image_name = image_name.replace("'", '')
        image_name = image_name.replace(':', '')
        image_name = image_name.split('.')[0]

        image_url = firebase.upload_file(f'curriculum/Biology/{image_path}', f'{images_dir}/{image_path}')
        
        print(image_url)
        print(f'curriculum/Biology/{image_path}')
        print(f'{images_dir}/{image_path}')
        print()
