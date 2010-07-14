RAILS_GEM_VERSION = '2.3.8' unless defined? RAILS_GEM_VERSION
require File.join(File.dirname(__FILE__), 'boot')

# honestly, who would give a shit?
Rails::VendorGemSourceIndex.silence_spec_warnings = true

Rails::Initializer.run do |config|
  config.gem "acts_as_list"
  config.time_zone = 'Mountain Time (US & Canada)'
end
