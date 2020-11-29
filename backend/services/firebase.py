import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import storage

class Firebase:
    def __init__(self):
        cred = credentials.Certificate('services/certificate.json')
        firebase_admin.initialize_app(cred, {
            'storageBucket': 'innoinc-9a2b8.appspot.com'
        })
        self.store = firestore.client() 
        self.bucket = storage.bucket()
    
    def upload_file(self, storage_path, filename):
        blob = self.bucket.blob(storage_path)
        blob.upload_from_filename(filename)
        blob.make_public()
        return blob.public_url
