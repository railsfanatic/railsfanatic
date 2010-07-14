# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_inspecretary_session',
  :secret      => '6dc6e0e2cf94459e603fb87786471b4523193c652cf088430651ba8a011e4ef03cf28ad925af047dc8238f200965000dc16b636f410da5c6f5e0cebd380588ea'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
