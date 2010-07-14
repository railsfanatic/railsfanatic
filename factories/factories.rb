class Cranky
=begin
  # Simple factory method to create a user instance, you would call this via Factory.build(:user)
  def user
    # Define attributes via a hash, generate the values any way you want
    define :name    => "Jimmy",
           :email   => "jimmy#{n}@home.com",   # An 'n' counter method is available to help make things unique
           :role    => "pleb",
           :address => default_address         # Call your own helper methods to wire up your associations
  end

  # Easily create variations via the inherit helper, callable via Factory.build(:admin)
  def admin
    inherit(:user, :role => "admin")
  end

  # Return a default address if it already exists, or call the address factory to make one
  def default_address
    @default_address ||= create(:address)
  end

  # Alternatively loose the DSL altogether and define the factory yourself, still callable via Factory.build(:address)
  def address
    a = Address.new
    a.street = "192 Broadway"
    a.city = options[:city] || "New York"   # You can get any caller overrides via the options hash
    a                                       # Only rule is the method must return the generated object
  end
=end
end